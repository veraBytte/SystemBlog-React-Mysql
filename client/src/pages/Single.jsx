import React from "react";
import Editar from "../assets/editar.png";
import Eliminar from "../assets/borrar.png";
import {Link} from "react-router-dom";
import Menu from "../components/Menu";


const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img  src="https://images.pexels.com/photos/17118488/pexels-photo-17118488/free-photo-of-sea-black-and-white-dawn-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="user">
                <img className="content_avatar" src="https://unavatar.io/dribbble/omidnikrah" alt="" />
                <div className="info">
                    <span>Jhon</span>
                    <p>Posted 2 days ago</p>
                </div>

                <div className="edit">
                    <Link to={`/write?edit=2`}>
                         <img className="interaction"  src={Editar} alt="" />
                    </Link>
                    
                    <img className="interaction"  src={Eliminar} alt="" />
                </div>
            </div>
            <h1 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</h1>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reiciendis labore nostrum dicta accusamus error distinctio quod, earum molestiae. Vero iusto dicta iure est quo consectetur aut eaque corporis tempora!
            <br /><br />
            Veritatis quibusdam dolore odit soluta qui. Facere omnis debitis recusandae provident, accusamus ad laudantium sit dolorem sequi quisquam quod modi voluptatibus vel officiis maxime exercitationem ullam quam animi voluptates optio.
            <br /><br />
            Odit veniam blanditiis id! Inventore quo delectus, repellat minima voluptatum recusandae molestiae officia maxime explicabo neque, eligendi eaque ea ducimus totam fuga nisi assumenda omnis quia a iste quod. Incidunt.
            <br /><br />
            Similique eveniet explicabo, est mollitia non nesciunt eos recusandae doloribus necessitatibus quidem, dicta iusto, iure eligendi natus nisi sapiente veniam animi aut voluptate. Tempore veritatis, similique neque ullam quae iste!
            <br /><br />
            Sed aliquid odio at nulla eveniet enim alias nemo soluta, accusamus numquam modi magni atque voluptate ipsam, commodi nesciunt, in ipsum magnam deleniti? Impedit dicta esse quae dolores cumque consectetur!
            <br /><br />
            Dignissimos excepturi recusandae explicabo pariatur. Odio voluptates consectetur sequi fuga obcaecati reiciendis esse quis quia nam, velit ipsum alias tempore voluptate ratione a iste ullam odit, reprehenderit aperiam autem dicta!
            Itaque explicabo veritatis aut sint culpa praesentium! Culpa, facilis quos repellat consequuntur alias deleniti, ea sequi dignissimos quas magni commodi quisquam ut iure earum soluta aut eveniet, ex consectetur omnis!
            Hic culpa eius cum! A rem facilis sunt laboriosam dolorum, iure, quasi tempore alias magnam reprehenderit aspernatur nostrum nihil sint ipsum. Quisquam voluptatum consequatur, aut voluptatem unde esse dolore perferendis.
            Consequuntur ut non sed, tempore quos assumenda adipisci perspiciatis temporibus id iure est odio, ab minima minus harum reiciendis saepe? Beatae porro fuga at veniam repellendus ab deleniti magni commodi.
            Dolore commodi a, eos cumque nesciunt, iure, atque necessitatibus sequi ratione nobis voluptatum veniam soluta dignissimos assumenda placeat. Quod tempora sed error vel velit modi molestias commodi vero sint provident!</p>

            </div>

            <div>
                <Menu />
            </div>
        </div>
    );
}

export default Single;