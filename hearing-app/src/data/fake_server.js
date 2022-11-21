import {results} from "./fake_data";


export class fakeServer {
    static get_result() {
        return results;
    }

    static get_result_by_username(username) {
        return results.filter(result => result.username === username);
    }

    static filter_result_by_type(result, type) {
        return results.filter((item) => item.type === type);
    }

    static get_result_by_id(id) {
        return results.find((item) => item.id.toString() === id.toString());
    }
}
