import { MdLocationOn,MdPhone } from 'react-icons/md'
export default function footer(){
    return(
        <footer id="Footer" className="text-center p-2">
            <MdLocationOn/> 中興大學 理學大樓-721室 <br />
            <MdPhone/> 04-22840497 #721<br />
            Copyright © 2021 NCHU NLP Lab. All rights reserved.
        </footer>
    )
}