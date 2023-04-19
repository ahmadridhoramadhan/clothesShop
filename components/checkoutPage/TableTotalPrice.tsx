export default function TableTotalPrice({ subtotal }: { subtotal: number; }): JSX.Element {
    return (
        <div className="flex flex-col-reverse md:flex-col">
            <table className="w-full border-black border-t-2 md:border-t-0 md:border-b-2 font-semibold">
                <tbody>
                    <tr>
                        <td className="text-xl md:w-32 md:text-2xl w-24">Shipping</td>
                        <td>:</td>
                        <td className="text-end md:text-xl text-sm">calculated in the next step</td>
                    </tr>

                    <tr>
                        <td className="text-xl md:w-32 md:text-2xl w-24">Subtotal</td>
                        <td>:</td>
                        <td className="text-end md:text-xl">{subtotal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                    </tr>
                </tbody>
            </table>

            <table className="w-full md:mt-2 mb-2 md:mb-0">
                <tbody>
                    <tr>
                        <td className="text-2xl font-semibold md:w-32 md:text-4xl w-24">Total</td>
                        <td>:</td>
                        <td className="text-end font-bold md:text-2xl align-bottom text-xl">{subtotal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
