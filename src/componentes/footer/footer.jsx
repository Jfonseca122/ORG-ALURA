import "./footer.css";
const Footer = ()=>{
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.webp)"}}>
        <div className="redes">
        <a href='https://pandablog-pied.vercel.app/'> 
            <img src="/img/panda.png" alt="MiBlog"/>
        </a>
        </div>
  
        <strong>Desarrollado por Alura@Fonseca </strong>
    </footer>
}
export default Footer;