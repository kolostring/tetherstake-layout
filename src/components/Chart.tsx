export type ChartProps = {
  maxValue: number;
  divisions: number;
  dataPointWidth: number;
  series: {
    category: string;
    value: number;
  }[];
};

export default function Chart({
  maxValue,
  divisions,
  series,
  dataPointWidth,
}: ChartProps) {
  const guideValues: number[] = [];
  for (let i = 0; i <= divisions; i++) {
    guideValues.push((i * maxValue) / divisions);
  }

  return (
    <div className="grid h-full w-full grid-cols-[auto_1fr] grid-rows-[1fr_auto] font-medium text-design-gray-dark">
      <div className="mr-3 flex flex-col-reverse justify-between text-end">
        {guideValues.map((v) => (
          <h3 key={v}>{v}</h3>
        ))}
      </div>

      <div className="relative mb-[10px] mt-3 flex flex-1">
        <div className="flex flex-1 flex-col-reverse justify-between">
          {guideValues.map((v) => (
            <hr key={v} className="border-dashed border-design-gray-dark" />
          ))}
        </div>

        <div className="absolute flex h-full w-full flex-1 items-end justify-around py-[4px]">
          {series.map((val) => (
            <div
              key={val.category}
              className={"origin-bottom animate-expandY bg-design-green-light"}
              style={{
                height: `${(val.value / maxValue) * 100}%`,
                width: `${dataPointWidth}px`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="col-start-2 flex flex-row justify-around text-sm">
        {series.map((val) => (
          <div key={val.category}>{val.category}</div>
        ))}
      </div>
    </div>
  );
}
