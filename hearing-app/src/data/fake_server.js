import {results} from "./fake_data";
import {randomColor} from "./util";

let resultCache = null;

export class fakeServer {
    static get_result() {
        if (resultCache) {
            return resultCache;
        }
        resultCache = results.map((result) => {
            return {
                ...result,
                "color": randomColor(),
            }
        });
        return resultCache;
    }

    static get_result_by_username(username) {
        return fakeServer.get_result().filter(result => result.username === username);
    }

    static filter_result_by_type(results, type) {
        return results.filter((item) => item.type === type);
    }

    static get_result_by_id(id) {
        return fakeServer.get_result().find((item) => item.id.toString() === id.toString());
    }
}
