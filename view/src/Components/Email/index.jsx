import '../Email/email.css'

function Email() {
  return (
   <>
    <div className="email-container">
        <div className="email-main">
            <h1>Subscribe</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos <br />maxime molestias quia deleniti, culpa voluptate! Lorem ipsum dolor sit amet.</p>
           <div className="mail">
           <input type="email"  placeholder='Enter Email'/>
           <a href="">SEND</a>
           </div>
        </div>
    </div>
   </>
  )
}

export default Email