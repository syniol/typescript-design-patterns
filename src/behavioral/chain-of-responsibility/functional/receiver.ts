import NewPaymentHandler from './handler'
import NewFundsHandler from './handler/funds.handler'
import NewHeaderValidationHandler from './handler/header.handler'
import NewUserVerificationHandler from './handler/user.handler'

export default async function Receiver(requestContext: any) {
    await NewPaymentHandler([
        NewFundsHandler({}),
        NewHeaderValidationHandler(),
        NewUserVerificationHandler({}),
    ]).handle(requestContext);
}
