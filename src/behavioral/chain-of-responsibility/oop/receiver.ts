import PaymentHandler from './handler'
import FundsHandler from './handler/funds.handler'
import HeaderValidationHandler from './handler/header.handler'
import UserVerificationHandler from './handler/user.handler'

export default async function Receiver(requestContext: any) {
    await new PaymentHandler(
        new FundsHandler({}),
        new HeaderValidationHandler({}),
        new UserVerificationHandler({}),
    ).handle(requestContext)
}
