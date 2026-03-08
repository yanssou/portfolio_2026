import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Ce que les gens disent de moi"
          sub="⭐️ Avis clients"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  {testimonial.initials ? (
                    <div
                      className="flex items-center justify-center size-14 rounded-full font-semibold text-lg shrink-0 text-[#b76e79]"
                      style={{ backgroundColor: "#fadadd" }}
                    >
                      {testimonial.initials}
                    </div>
                  ) : (
                    <img src={testimonial.imgPath} alt="" />
                  )}
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
