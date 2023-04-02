import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Config from "@/configs/config.export";
import axios from "axios";
import { getImageSize } from "react-image-size";

import RecommandMdList from "@/components/widgets/RecommandMdList";
import EventMdList from "@/components/widgets/EventMdList";

import { productResponseDetailImages } from "@/Types/Product/Response";
import { eventData } from "@/constants/Apis/Types/ResponseType";
import { imageType } from "@/Types/image/imageType";
import { productDataType } from "@/Types/starbucksTypes";
import PageDetailInfoCommon from "@/components/widgets/PageDetailInfoCommon";
import ProductHeader from "@/components/page/product/ProductHeader";
import ProductDetailList from "@/components/page/product/ProductDetailList";
import { REQUEST_PRODUCT_READ } from "@/constants/Apis/URL";
import ProductOrderSection from "@/components/page/product/ProductOrderSection";

export default function Product() {
  const { query } = useRouter();
  const { baseUrl } = Config();

  const [productData, setProductData] = useState<productDataType>();
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
    axios
      .get(`${baseUrl}/${REQUEST_PRODUCT_READ}?productId=${query.productId}`)
      .then((res) => {
        console.log("productdata", res.data);
        setProductData(res.data.data.productInfo);
        console.log(getImageSize(res.data.data.productInfo.thumbnail));
        getImageSize(res.data.data.productInfo.thumbnail).then((size) => {
          console.log(size);
          setImportImgSize({
            width: size.width,
            height: size.height,
          });
        });
        let images: productResponseDetailImages[] = [];
        res.data.data.imageList.map(
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
  }, [baseUrl, query.productId]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/recommend/active`)
      .then((res) => {
        console.log(res);
        let rndNumber = Math.floor(Math.random() * res.data.data.length);
        setRecommandData(res.data.data[rndNumber]);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${baseUrl}/api/v1/event/active`)
      .then((res) => {
        console.log(res);
        let rndNumber = Math.floor(Math.random() * res.data.data.length);
        setViewByOthersData(res.data.data[rndNumber]);
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
