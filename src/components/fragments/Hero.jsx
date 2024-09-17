import HeroBanner from "../elements/HeroBanner";

export default function Hero() {
  return (
    <section
      className="pb-[43.2px] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('https://roboguru-forum-cdn.ruangguru.com/image/c24471b0-e4b2-48ff-b48d-f9c63c25812e.png'), linear-gradient(202.03deg, #20a4b0 35.27%, #0094ff 66.9%, #4945ff 90.13%)`,
      }}
    >
      <div className="flex items-center px-[680px]">
        <HeroBanner />
        <img
          src="https://roboguru-forum-cdn.ruangguru.com/image/c8d6923b-c6f1-4a02-a7ad-b7e9d268b138.png"
          className="w-[474px] h-[290px]"
        />
      </div>
    </section>
  );
}
