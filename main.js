import './style.css'
import { BreakingbadApp } from './src/breakingbad/breakingbad-app'

const breakingBadUrl = "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/01/breaking_bad_vince_gilligan_amc.jpg"

document.querySelector('#app').innerHTML = `
  <div>

    
    <h1 id="app-title">Hello Vite!</h1>
    <img src="${breakingBadUrl}" height="370" alt="BAD"> 
    <div class="card">
    </div>
  
  </div>
`
const element = document.querySelector('.card');

BreakingbadApp( element );
