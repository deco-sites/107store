import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title: string;
  subtitle: string;
  testimonials: Array<{
    /** @description Company Logo */
    logo: ImageType;
    description: string;
    /** @description Profile Logo */
    image: ImageType;
    name: string;
    /** @description Position in company */
    position: string;
  }>;
}

export default function Testimonials({
  title,
  subtitle,
  testimonials,
}: Props) {
  return (
    <div className="w-full mx-4">
      <div className="flex flex-col w-full m-4">
        <div className="w-full text-center py-8">
          <h1 className="text-4xl">{title}</h1>
          <h3 className="text-lg">{subtitle}</h3>
        </div>

        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial) => (
            <div className="w-full py-4 lg:w-1/3">
              <div className="flex flex-col items-center">
                <div className="avatar">
                  <div className="w-16 rounded-xl">
                    <img src={testimonial.logo} alt={testimonial.name} />
                  </div>
                </div>
              </div>

              <div className="text-center w-2/3 mx-auto py-4">
                <p className="text-sm">{testimonial.description}</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="avatar">
                  <div className="w-12 rounded-xl">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg">{testimonial.name}</h3>
                  <h4 className="text-sm">{testimonial.position}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
