import React, { Component } from 'react'
import Controls from './Controls'

export default class BT11 extends Component {
  constructor() {
    super()
    this.state = {
        // data ban đầu
        students: [
            { id: 1, name: "Hieu", age: 18 },
            { id: 2, name: "Hoang", age: 20 },
            { id: 3, name: "Minh", age: 25 },
            { id: 4, name: "Quang", age: 24 }
        ],
        textSearch: "", // tên người cần tìm
        textSort: "nomal", // sắp xếp theo chiều nào(mặc định: ko sắp xếp)
        dataShow: [] // mảng data tìm kiếm được
    }
}
// set lại tên người cần tìm
handleChangeTextSearch = (e) => this.setState({ textSearch: e.target.value })
// hàm thực hiện lọc người cần tìm
handleSearch = () => {
    // lọc
    let studentsSearch = this.state.students.filter((student) => {
        return student.name.toLowerCase().includes(this.state.textSearch.toLowerCase())
    })
    // set lại
    this.setState({
        dataShow: studentsSearch
    })
}
// hàm thực hiện sắp xếp data người dùng
handleChangeSelect = (e) => {
    // chiều cần sắp xếp
    let textSort = e.target.value
    // sắp xếp lại
    switch (textSort) {
        case "nomal": {
            this.setState({
                textSort,
                dataShow: this.state.students
            })
            break
        }
        case "asc": {
            let newArry = [...this.state.students]
            newArry.sort((a, b) => a.age - b.age)
            this.setState({
                textSort,
                dataShow: newArry
            })
            break
        }
        case "desc": {
            let newArry = [...this.state.students]
            newArry.sort((a, b) => b.age - a.age)
            this.setState({
                textSort,
                dataShow: newArry
            })
            break
        }
    }
}

render() {
    // lấy ra data cần show
    let result = this.state.dataShow.length == 0 ?
        this.state.students : this.state.dataShow

    return (
        <div>
            <Controls
                handleChangeTextSearch={this.handleChangeTextSearch}
                handleSearch={this.handleSearch}
                handleChangeSelect={this.handleChangeSelect}
            />
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((student, index) => (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
}
