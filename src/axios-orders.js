import axios from "axios";

const instance = axios.create({
	baseURL: "https://burger-order-71947-default-rtdb.firebaseio.com/",
});

export default instance;
