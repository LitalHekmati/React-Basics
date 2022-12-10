import Input from "./Input"

function Checkout(props) {
    return (
        <form class="form__field">
        <link rel="stylesheet" href="Checkout.css"/>
          <Input type="text" placeholder="name" />
          <Input type="password" placeholder="Id" />
          <button type="submit">Save me</button>
        </form>
      );
    
}

export default Checkout;



