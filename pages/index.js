import {useForm} from "react-hook-form";
import axios from "axios";
import Table from "../components/table";
import React from "react";

const postData = async (data) => {

    switch (data['item_name']){
        case 'book': data["price"] = 150; break;
        case 'laptop': data["price"] = 1200; break;
        case 'ball': data["price"] = 200; break;
    }

    function sendToDB(){
        return axios.post('/api/user', data);
    }

    function sendToWebhook(){

        const payload = JSON.stringify({
            version: '1.0.0',
            event: 'Purchase',
            triggered_at: new Date(),
            content: `A ${data.item_name} purchase was made`,
            data: {
                item_name: data.item_name,
                item_price: data.price,
            }
        })

        return axios({
            method: 'post',
            url: data.url,
            headers: {'Content-Type': 'application/json'},
            data: payload,
        })
    }

    Promise
        .all([sendToDB(), sendToWebhook()])
        .then(results => {
            // console.log(results)
            return [results[0], results[1]];
        })
        .catch(error => {
            // console.log(error)
            return [error[0], error[1]];
        })

}

export default function Home(){

    const [results, setResults] = React.useState([]);
    const [check, setCheck] = React.useState(false);

    const {register, handleSubmit} = useForm({
        defaultValues: {
            item_name: "",
            price: "",
            url: "",
        }
    })

    React.useEffect(() => {
        axios
            .get('/api/user')
            .then(res => {
                // console.log(res.data);
                setResults(res.data.data)
            })
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit(data => {
                check ? (data.url[data.url.length - 1] === '/' ? data.url += data.item_name : data.url += `/${data.item_name}`) : '';
                console.log(data.url);
                postData(data)
                })}>
                <select {...register("item_name")} required>
                    <option value="" disabled>Select...</option>
                    <option value="book">Book: $200</option>
                    <option value="ball">Ball: $150</option>
                    <option value="laptop">Laptop: $1200</option>
                </select>
                <label htmlFor="url">
                    <br/>
                    <br/>
                    <span>Webhook payload: </span>
                    <input type="url" {...register("url")}/>
                </label>
                <br/>
                <input type="checkbox" onChange={event => {
                    setCheck(event.target.checked);
                }} /><span>Attach item?</span>
                <br/><br/>
                <input type="submit" value="Purchase"/>
                <br/>
                <br/>
                <Table data={results}/>
            </form>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {}
    }
}
