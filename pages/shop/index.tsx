import Layout from "@/components/layouts"
import SectionPromo from "@/components/shopPage/SectionPromo";
import SectionBestSeller from "@/components/shopPage/SectionBestSeller";
import SectionNewProductThisMount from "@/components/shopPage/SectionNewProductThisMount";
import SectionAllProduct from "@/components/shopPage/SectionAllProduct";
import CardShop from "@/components/shopPage/CardShop";
import ProductInterface from "@/utils/interface/ProductInterface";

export default function Shop({ dataAllProducts }: { dataAllProducts: Array<ProductInterface> }) {
    const all_product_list = dataAllProducts.map(product =>
        <CardShop key={product.id} product_price={product.price} Product_name={product.name} thumbnail_src={product.thumbnail_global} id={product.id} />
    )

    return (
        <Layout title="Shop">
            <div className="max-w-8xl mx-auto p-3 transition-all">
                <SectionPromo />

                <SectionBestSeller>
                </SectionBestSeller>


                <SectionNewProductThisMount>
                    p
                </SectionNewProductThisMount>

                <SectionAllProduct>
                    {all_product_list}
                </SectionAllProduct>
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



