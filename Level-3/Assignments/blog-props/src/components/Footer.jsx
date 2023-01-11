import React from "react";


export default function Footer(){
  return(
    <footer className="border-top">
    <div className="row gx-4 gx-lg-5 justify-content-center">
    <ul className="list-inline text center">
    <li className="list-inline-item"><a href="#!"><span className="fa-stack fa-lg"><i className="fas fa-circle fa-stack-2x"><i className="fab fa-twitter fa-stack-1x fa-inverse"></i></i></span></a></li>

  


    <li className="list-inline-item"><a href="#!"><span className="fa-stack fa-lg"><i className="fas fa-circle fa-stack-2x"><i className="fab fa-facebook fa-stack-1x fa-inverse"></i></i></span></a></li>


    <li className="list-inline-item"><a href="#!"><span className="fa-stack fa-lg"><i className="fas fa-circle fa-stack-2x"><i className="fab fa-github fa-stack-1x fa-inverse"></i></i></span></a></li>


    </ul>
    <div class="small text-center text-muted fst-italic">Copyright © Your Website 2022</div>
    </div>
    </footer>
  )
}