import featureOval from "../../assets/agency/featureOval.png";
import emailMarketing from "../../assets/agency/emailMarketing.png"
function Features() {
  return (
    <div className="relative p-5 flex flex-col gap-12 md:p-20 lg:p-24 h-[calc(100vh-3.5rem)] bg-gradient-to-t from-agencyPrimary to-agencySecondary">
      <div className="absolute right-0 top-0 flex items-end justify-end">
        <img src={featureOval} className="w-3/5" alt="" />
      </div>
      <div className="text-3xl md:text-4xl font-bold">Features</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-3">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-t from-[#f8774f] to-[#8f5359]">
            <img src={emailMarketing} alt="" />
          </div>
          <h3 className="font-bold">Email Marketing</h3>
          <p className="text-textGrey">
            Mollit fugiat enim occaecat consectetur proident voluptate quis
            officia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
