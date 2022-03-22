// import React from 'react';
// class App extends React.Component {
//  render() {
//   return(
//    <div>
//     My App Component
//    </div>
//   );
//  }
// }
// export default App
import axios from "axios";
import { useState, useEffect  } from 'react';
function App() {
    //Tạo một useSate để lưu trữ data đã lấy được
    const [data,setData] = useState([]);  // SET DEFAULT NÓ LÀ MỘT MẢNG NÊN ĐỂ []
     // Lấy data từ server về ta dùng useEffect
     // Trước tiên cần install thư viện axios -> npm install axios
     // Tại sao là async vì lấy từ server tốn thời gian, dùng async có từ khóa await để thêm thời gian đợi lấy data về
     useEffect(()=>{
       async function getData(){
         const res = await axios.get("/api/products");
         // Đường dẫn trên quá dài, nếu muốn bỏ http://localhost:8080 này đi ta thêm file package.json dòng này: "proxy" : "http://localhost:8080"
         return res;
       }
       // call thử function
        getData().then((res) => setData(res.data));
        // Catch error
        getData().catch((err) => console.log(err));
    }, []);
  
    return (
    <>
    {console.log(data)}
       <div>
       <table>
           <thead>
                <th>product_id</th>
                <th>product_id</th>
                <th>product_jan</th>
                <th>product_code</th>
                <th>up_date</th>
                <th>up_ope_cd</th>
           </thead>
           <tbody>
              
                    {
                         data.map((item) =>{
                            return (
                                <>
                                <tr>
                                   <td>{item.product_id}</td>
                                   <td>{item.product_id}</td>
                                   <td>{item.product_jan}</td>
                                   <td>{item.product_code}</td>
                                   <td>{item.up_date}</td>
                                   <td>{item.up_ope_cd}</td>
                               </tr>
                              </>
                                    )
                        })

                
                    }
            
           </tbody>
           
        
        </table>
       </div>
    </>
     
    );
  }

  export default App;