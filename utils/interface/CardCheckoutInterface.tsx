import { imageType } from "../type/imageType"

export default interface CardCheckoutInterface {
    thumbnail: imageType
    quantity: number
    name: string
    totalPrice: number
    size: number | string
    color: string
}
