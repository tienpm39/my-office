import Head from 'next/head';
import HeaderSecondNav from '@/container/Layout/Header/HeaderSecondNav';
import SearchArea from '@/container/Home/Search/Search';
import Feature from '@/container/Home/Feature/Feature';
import Nearby from '@/container/Nearby/Nearby';
import LocationGrid from '@/container/Home/Location/Location';
import { getAPIData } from '@/utils/get-api-data';

export default function Home({ locationData }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSecondNav />
      <SearchArea />
      <Feature />
      <Nearby />
      <LocationGrid data={locationData} />
    </>
  );
}

export async function getServerSideProps() {

  const apiUrl = [
    {
      endpoint: 'location',
      name: 'locationData',
    },
  ];
  const pageData = await getAPIData(apiUrl);
  let locationData = [];

  if (pageData) {
    pageData.forEach((item, key) => {
      if (item.name === 'locationData') {
        locationData = item.data ? [...item.data] : [];
      }
    });
  }
  return {
    props: { locationData },
  };
}

