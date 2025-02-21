import axios from "axios";

let timetableList

async function getTimetableList() {
    const response = await axios.get('/timetable')
    timetableList = response.data
    console.log(timetableList)
}

getTimetableList()