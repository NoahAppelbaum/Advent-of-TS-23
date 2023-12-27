type Address = { address: string; city: string };
type PresentDeliveryList <Type>= {[Property in keyof Type]: Address};
