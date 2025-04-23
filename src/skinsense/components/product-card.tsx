import React from "react";
import { cn } from "@/lib/utils";
import { ShoppingCartIcon, InfoIcon } from "lucide-react";
import Button from "@/skinsense/components/button";
import { Product } from "@/skinsense/data/skin-data";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const {
    name,
    brand,
    image,
    price,
    currency,
    activeIngredients,
    benefits,
    matchScore,
    description,
  } = product;

  // Format price with currency
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(price);

  // Convert match score to percentage
  const matchPercentage = Math.round(matchScore * 100);

  return (
    <div
      className={cn("bg-white rounded-xl shadow-md overflow-hidden", className)}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto relative">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div className="absolute top-2 right-2 bg-[#6EC5B8] text-white font-bold rounded-full w-12 h-12 flex items-center justify-center">
            {matchPercentage}%
          </div>
        </div>

        <div className="p-4 md:w-2/3 flex flex-col">
          <div className="flex-grow">
            <div className="text-sm text-[#6EC5B8] font-medium mb-1">
              {brand}
            </div>
            <h3 className="text-lg font-bold text-[#10203B] mb-2">{name}</h3>

            <div className="mb-3">
              <h4 className="text-sm font-semibold text-[#10203B] mb-1">
                Key Ingredients:
              </h4>
              <div className="flex flex-wrap gap-1">
                {activeIngredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#F0F9F8] text-[#10203B] text-xs px-2 py-1 rounded-md"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <h4 className="text-sm font-semibold text-[#10203B] mb-1">
                Benefits:
              </h4>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                {benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-gray-600 mb-4">{description}</p>
          </div>

          <div className="flex items-center justify-between mt-2">
            <span className="text-lg font-bold text-[#10203B]">
              {formattedPrice}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                icon={<InfoIcon size={16} />}
                iconPosition="left"
              >
                More Info
              </Button>
              <Button
                variant="primary"
                size="sm"
                icon={<ShoppingCartIcon size={16} />}
                iconPosition="left"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
