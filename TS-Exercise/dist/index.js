"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const axios = require("axios");
const fetchAPI = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios.get("https://icat-trainee-api.onrender.com/getData");
    function compareHobby(i) {
        if (data.data.data[i].hobbie[0].rate > data.data.data[i].hobbie[1].rate) {
            if (data.data.data[i].hobbie[0].rate > data.data.data[i].hobbie[2].rate) {
                return data.data.data[i].hobbie[0].hobbyName;
            }
            else {
                return data.data.data[i].hobbie[2].hobbyName;
            }
        }
        else if (data.data.data[i].hobbie[1].rate > data.data.data[i].hobbie[2].rate) {
            return data.data.data[i].hobbie[1].hobbyName;
        }
        else {
            return data.data.data[i].hobbie[2].hobbyName;
        }
    }
    console.log(information(data.data.data[0].name, data.data.data[0].age, compareHobby(0)));
    console.log(information(data.data.data[1].name, data.data.data[1].age, compareHobby(1)));
    console.log(information(data.data.data[2].name, data.data.data[2].age, compareHobby(2)));
});
function information(name, age, hobbyName) {
    return { name, age, hobbyName };
}
fetchAPI();
