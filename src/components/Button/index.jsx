import { ButtonWrapper } from "./Button.styled"

const Button = ({type='button', imgSrc, name, nameClass='btn', handleClick }) => {
  return (
    <ButtonWrapper type={type} className={nameClass} onClick={handleClick}>
        <img src={imgSrc} alt={name}/>
        <span>{name}</span>
    </ButtonWrapper>
  )
}

export default Button