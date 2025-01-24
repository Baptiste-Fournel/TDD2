const { auth } = require("./../src/user.js");

beforeEach(() => {
    jest.resetAllMocks();
    global.localStorage = {};
    global.localStorage.addItem = jest.fn();
})

describe("When i try to authentified", () => {
    test("and the api server does not respond, then i should have an error", () => {

    });
    test("and the api return an ok response, then i should store data in localstorage", async () => {
        global.fetch = jest.fn();
        global.fetch.mockResolvedValue({
            json: jest.fn().mockResolvedValue({
                firstname: "Aurélien",
                lastname: "Vaast",
                login: "avaast"
            }),
            ok: true
        });
        let spyStorage = jest.spyOn(localStorage,'addItem');
        await auth("aurélien","123456"); 
        expect(global.fetch).toHaveBeenCalled();
        expect(spyStorage).toHaveBeenCalled();
    });
    test("and the api return an ko response, then i should have an error", () => {

    });
})
