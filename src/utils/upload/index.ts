
import CONFIG from "@/config";
import axios from "axios";

const handleImageUpload = async (img) => {
    const form = new FormData();
    form.append("document", img);



    const resp = await axios.post(`${CONFIG.API_URL}/documents/upload`, form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return resp.data.url

}

export default handleImageUpload;
