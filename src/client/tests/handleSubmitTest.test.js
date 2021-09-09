import 'babel-polyfill'
import { handleSubmit } from "../js/handleSubmit.js";

test('handleSubmit is defined', () => {
    expect(handleSubmit).toBeDefined();
})
