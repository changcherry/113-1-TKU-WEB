import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
<body>
    <div id="app">
    <h1>關於我</h1>

<section>
<h2>基本訊息</h2>
    <div id="pht">
        <img src="自我介紹的照片.jpg" alt="自我介紹的照片" className="profile-img" />
    </div>  
</section>
<section>
<div id="info-table">
                <table>
                    <tr>
                        <th>項目</th>
                        <th>內容</th>
                    </tr>
                    <tr>
                        <td>姓名</td>
                        <td>張安琪</td>
                    </tr>
                    <tr>
                        <td>綽號</td>
                        <td>小7</td>
                    </tr>
                    <tr>
                        <td>年齡</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>學歷</td>
                        <td>
                            <ul>
                                <li>尖山國小</li>
                                <li>文英國中</li>
                                <li>苗栗高中</li>
                                <li>淡江大學</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>興趣</td>
                        <td>跳舞、打羽毛球、拍照、旅行、游泳</td>
                    </tr>
                    <tr>
                        <td>聯絡方式</td>i956
                        <td>411631111@o365.tku.edu.tw</td>
                    </tr>
                </table>
            </div>
        </section>  
        <section>
        <h2>自我敘述</h2>
        <div id ="self-description">
            <p>
            目前就讀淡江大學三年級資管系，想當初自己誤打誤撞就進入了自己完全不了解的科系，沒想到<br></br>
                    就默默地讀了三年，只能感嘆時間過得飛逝，再也不是懵懵懂懂的大一生了，原本對程式真的完<br></br>
                    全提不起興趣，但最近發現網頁設計很有趣，有點想往這方面多學習，因為有別於之前所學習的<br></br>
                    程式，學習 HTML 的過程一點都不枯燥乏味，很有趣!


            </p>
        </div>





        </section>

<section>

<h2>!! 給大家欣賞我家的貓咪!!</h2>
<div id="cat-photo">
<img src="hana照片上課用.jpg" width="300" height="400" alt="我家的貓咪"></img>

</div>
<div id="cat">
                <strong>
                    <h3>4不4很可愛</h3>
                </strong>

                <a href="https://www.instagram.com/hanatoosay_?igsh=dHczcWthbjlrcGZi">貓咪 IG 連結</a>
            </div>

            <div id="cat-info">
                <ul>
                    <li>名字: Hana</li>
                    <li>年齡: 3個月</li>
                </ul>
            </div>
            <form action="/submit" method="post">
            <label htmlFor = "name ">歡迎大家誇獎</label>
           
                <input type="text" id="name" name="name"></input>
                <input type="submit" value="提交"></input>

            </form>


</section>




    </div>
</body>

    </>
  )
}

export default App
