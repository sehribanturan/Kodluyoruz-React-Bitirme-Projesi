import style from "./Contact.module.scss"; 

// iletişim bilgilerinin bulunduğu component

const Contact = () => {

  const handleSend = (e) => {
    window.alert("Görüş ve Önerileriniz Gönderilmiştir")
  }

  return (
    <div className={style.contact}>
      <div>
      <p className={style.contact__p}> Adres: İstanbul/Kadıköy</p>
      <p className={style.contact__p}> Tel: 0212-012-34-56</p>
      <p className={style.contact__p}> Mail: random1234@gmail.com</p>
      <p className={style.contact__p}>Görüş ve Öneri:</p>
      <textarea className={style.contact__input}/>
      <button className={style.contact__button} onClick={handleSend}>Gönder</button>
      </div>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.2989845816846!2d29.017105215661783!3d40.996828728077666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab843c0cfb469%3A0x4aa41af48681c847!2sHaydarpa%C5%9Fa!5e0!3m2!1str!2str!4v1660407694312!5m2!1str!2str" width="900" height="600" />
      </div>
    </div>
  );
};

export default Contact;
