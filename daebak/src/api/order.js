import { apiInstance } from "./index.js";
const path = "/order";

function get(params) {
    return apiInstance.get(path, { params });
}
function add(data) {
    return apiInstance.post(path, data);
}
function edit(data) {
    return apiInstance.put(path, data);
}
function remove(ids) {
    return apiInstance.delete(path, { params: { ids: ids.join(",") } });
}

export default { get, add, edit, remove };
