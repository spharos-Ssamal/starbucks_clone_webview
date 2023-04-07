import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Config from "@/configs/config.export";
import { getImageSize } from "react-image-size";

import RecommandMdList from "@/components/widgets/RecommandMdList";
import EventMdList from "@/components/widgets/EventMdList";

import {
  GetProductDetailInfoRes,
  productResponseDetailImages,
} from "@/Types/Product/Response";
import { eventData } from "@/constants/Apis/Types/ResponseType";
import { imageType } from "@/Types/image/imageType";
import PageDetailInfoCommon from "@/components/widgets/PageDetailInfoCommon";
import ProductHeader from "@/components/page/product/ProductHeader";
import ProductDetailList from "@/components/page/product/ProductDetailList";
import ProductOrderSection from "@/components/page/product/ProductOrderSection";
import {
  RequestEventActive,
  RequestGetProductDetailInfo,
  RequestRecommendActive,
} from "@/Service/ProductService/ProductService";
import { ProductInfo } from "@/Types/Product/Request";

export default function Product() {
  const { query } = useRouter();
  const { baseUrl } = Config();

  const [productData, setProductData] = useState<ProductInfo>();
  const [productImages, setProductImages] = useState<
    productResponseDetailImages[]
  >([]);
  const [recommandData, setRecommandData] = useState<eventData>(
    {} as eventData
  );
  const [viewByOthersData, setViewByOthersData] = useState<eventData>(
    {} as eventData
  );
  const [importImgSize, setImportImgSize] = useState<imageType>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof query.productId === "string") {
      RequestGetProductDetailInfo(parseInt(query.productId))
        .then((res) => {
          const productInfoResult: GetProductDetailInfoRes = res.data;

          setProductData(productInfoResult.productInfo);
          getImageSize(productInfoResult.productInfo.thumbnail).then((size) => {
            setImportImgSize({
              width: size.width,
              height: size.height,
            });
          });
          let images: productResponseDetailImages[] = [];
          productInfoResult.imageList.forEach(
            async (item: productResponseDetailImages) => {
              const { width, height } = await getImageSize(item.imageUrl);
              images.push({
                id: item.id,
                imageUrl: item.imageUrl,
                width: width,
                height: height,
              });
            }
          );
          setProductImages(images);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [baseUrl, query.productId]);

  useEffect(() => {
    RequestRecommendActive()
      .then((res) => {
        let rndNumber = Math.floor(Math.random() * res.data.length);
        setRecommandData(res.data[rndNumber]);
      })
      .catch((err) => {
        console.log(err);
      });

    RequestEventActive()
      .then((res) => {
        let rndNumber = Math.floor(Math.random() * res.data.length);
        setViewByOthersData(res.data[rndNumber]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [baseUrl]);

  return (
    <>
      {productData && (
        <>
          <Head>
            <title>{productData.description}</title>
            <meta name="description" content={productData.description} />
            <meta property="og:title" content={productData.description} />
          </Head>
          <ProductHeader
            productData={productData}
            importImgSize={importImgSize}
          />
          <ProductDetailList productImages={productImages} />
          <RecommandMdList data={recommandData} />
          <EventMdList
            title="다른 고객이 함께 본 상품"
            data={viewByOthersData}
          />
          <PageDetailInfoCommon />
          <ProductOrderSection
            productName={productData.name}
            productPrice={productData.price}
            productId={productData.id}
          />
        </>
      )}
    </>
  );
}
