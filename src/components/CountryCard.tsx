type CountryCardProps = {
  countryName: string;
  region: string;
  capital: string;
  flag: string;
  population: number;
};

const CountryCard = ({
  countryName,
  capital,
  population,
  region,
  flag,
}: CountryCardProps) => {
  console.log(countryName);

  return (
    <article className="border shadow-sm rounded-lg overflow-hidden">
      <div className="h-40 border">
        <img
          src={flag}
          alt={countryName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <h2 className="font-semibold text-xl text-slate-900">{countryName}</h2>
        <div className="flex flex-col gap-2">
          <p className="inline-flex gap-2">
            <span className="font-semibold text-slate-700">Population:</span>
            <span className="text-slate-700">{population}</span>
          </p>
          <p className="inline-flex gap-2">
            <span className="font-semibold text-slate-700">Region:</span>
            <span className="text-slate-700">{region}</span>
          </p>
          {capital && (
            <p className="inline-flex gap-2">
              <span className="font-semibold text-slate-700">Capital:</span>
              <span className="text-slate-700">{capital[0]}</span>
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export default CountryCard;
