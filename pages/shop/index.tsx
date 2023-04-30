import Layout from "@/components/layouts"
import SectionPromo from "@/components/shopPage/SectionPromo";
import CardShop from "@/components/shopPage/CardShop";
import ProductInterface from "@/utils/interface/ProductInterface";
import { SectionProduct } from "../../components/shopPage/SectionProduct";

export default function Shop({ dataAllProducts }: { dataAllProducts: Array<ProductInterface> }) {
    const all_product_list = dataAllProducts.map(product =>
        <CardShop key={product.id} product_price={product.price} Product_name={product.name} thumbnail_src={product.thumbnail_global} id={product.id} />
    )
    // const Best_seller_product_list = 
    // const new_product_list =

    return (
        <Layout title="Shop">
            <div className="max-w-8xl mx-auto p-3 transition-all">
                <SectionPromo />
                <SectionProduct isHorizontal title="Best Seller">
                    {all_product_list}
                </SectionProduct>
                <SectionProduct title="All Product" >
                    {all_product_list}
                </SectionProduct>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const dataAllProducts: Array<ProductInterface> = require('@/db/products.json')
    return {
        props: {
            dataAllProducts,
        },
    };
}