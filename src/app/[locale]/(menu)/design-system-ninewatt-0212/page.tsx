import Button from "@/app/_components/design-system/button";
import { ArrowRight } from "@/shared/assets/icons/main-icons";

export default function DesignSystemNinewatt() {
  return (
    <div className="p-10 space-y-12">
      {/* PRIMARY */}
      <div>
        <h2 className="text-xl font-bold mb-4">Primary Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button label="Default" variant="primary" size="large" />
          <Button label="With Icon" variant="primary" size="large" iconComponent={<ArrowRight />} />
          <Button label="Default" variant="primary" size="medium" />
          <Button
            label="With Icon"
            variant="primary"
            size="medium"
            iconComponent={<ArrowRight />}
          />
        </div>
      </div>

      {/* SECONDARY */}
      <div>
        <h2 className="text-xl font-bold mb-4">Secondary Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button label="Default" variant="secondary" size="large" />
          <Button
            label="With Icon"
            variant="secondary"
            size="large"
            iconComponent={<ArrowRight />}
          />
          <Button label="Default" variant="secondary" size="medium" />
          <Button
            label="With Icon"
            variant="secondary"
            size="medium"
            iconComponent={<ArrowRight />}
          />
        </div>
      </div>

      {/* TERTIARY (WHITE) */}
      <div>
        <h2 className="text-xl font-bold mb-4">Tertiary Buttons (White)</h2>
        <div className="flex gap-4 flex-wrap bg-[#EFEFF0] p-4 rounded-md">
          <Button label="Default" variant="tertiary" size="large" color="white" />
          <Button
            label="With Icon"
            variant="tertiary"
            size="large"
            color="white"
            iconComponent={<ArrowRight />}
          />
          <Button label="Default" variant="tertiary" size="medium" color="white" />
          <Button
            label="With Icon"
            variant="tertiary"
            size="medium"
            color="white"
            iconComponent={<ArrowRight />}
          />
        </div>
      </div>

      {/* TERTIARY (BLACK) */}
      <div className="bg-[#18191B] p-4 rounded-md">
        <h2 className="text-xl font-bold text-white mb-4">Tertiary Buttons (Black)</h2>
        <div className="flex gap-4 flex-wrap">
          <Button label="Default" variant="tertiary" size="large" color="black" />
          <Button
            label="With Icon"
            variant="tertiary"
            size="large"
            color="black"
            iconComponent={<ArrowRight />}
          />
          <Button label="Default" variant="tertiary" size="medium" color="black" />
          <Button
            label="With Icon"
            variant="tertiary"
            size="medium"
            color="black"
            iconComponent={<ArrowRight />}
          />
        </div>
      </div>
    </div>
  );
}
