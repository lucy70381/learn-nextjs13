export const dynamicParams = false;

export async function generateStaticParams() {
  const countries = ["Taipei", "Japan"];
  // can be any data source, e.g. an API

  return countries.map((country) => ({
    country: country.toString(),
  }));
}

async function getDateTime(params: { country: string }) {
  const res = await fetch(
    `http://worldtimeapi.org/api/timezone/Asia/${params.country}`,
    {
      next: { revalidate: 10 }, // production only, not for development
    }
  );
  const time = await res.json();

  return time;
}

export default async function Page({
  params,
}: {
  params: { country: string };
}) {
  const time = await getDateTime(params);

  return (
    <section>
      <h1>Country: {params.country}</h1>
      <p>{time.datetime}</p>
    </section>
  );
}
