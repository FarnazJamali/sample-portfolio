import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.BASE_URL);

export default pb;
