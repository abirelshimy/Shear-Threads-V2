import { STORE_URL } from "@/lib/products";

const FIELD_LABEL =
  "block text-[0.68rem] font-semibold tracking-[0.2em] text-muted uppercase";
const FIELD_INPUT =
  "mt-2 w-full rounded-xl border border-seam bg-surface px-4 py-3 text-[0.95rem] text-ink placeholder:text-muted/60";

const ORDER_TYPES = [
  "Woven lanyards",
  "Crewnecks & hoodies",
  "Chapter merch drop",
  "Crossing or big/little gifts",
  "Something else",
] as const;

/**
 * Order-request form. Posts directly to the live Shopify store's contact
 * endpoint - no client JS, no third-party form service. Every `contact[...]`
 * field (custom labels included) arrives in the store's contact notification
 * email, the same inbox the current site's contact form delivers to.
 */
export default function OrderForm() {
  return (
    <form
      action={`${STORE_URL}/contact#contact_form`}
      method="post"
      acceptCharset="UTF-8"
      className="bg-ivory text-ink rounded-2xl p-6 sm:p-8 md:p-10"
    >
      <input type="hidden" name="form_type" value="contact" />
      <input type="hidden" name="utf8" value="✓" />

      <h3 className="font-display text-2xl md:text-3xl">Order request</h3>
      <p className="text-muted mt-2 text-sm leading-relaxed">
        Tell us what you’re picturing. We’ll come back with a mockup and a
        price.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="order-name" className={FIELD_LABEL}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="order-name"
            name="contact[name]"
            type="text"
            required
            autoComplete="name"
            className={FIELD_INPUT}
          />
        </div>

        <div>
          <label htmlFor="order-email" className={FIELD_LABEL}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="order-email"
            name="contact[email]"
            type="email"
            required
            autoComplete="email"
            className={FIELD_INPUT}
          />
        </div>

        <div>
          <label htmlFor="order-phone" className={FIELD_LABEL}>
            Phone
          </label>
          <input
            id="order-phone"
            name="contact[phone]"
            type="tel"
            autoComplete="tel"
            className={FIELD_INPUT}
          />
        </div>

        <div>
          <label htmlFor="order-org" className={FIELD_LABEL}>
            Organization or chapter
          </label>
          <input
            id="order-org"
            name="contact[Organization or chapter]"
            type="text"
            placeholder="e.g. Lambda Theta Alpha, UDel"
            className={FIELD_INPUT}
          />
        </div>

        <div>
          <label htmlFor="order-type" className={FIELD_LABEL}>
            What do you need?
          </label>
          <select
            id="order-type"
            name="contact[What they need]"
            defaultValue={ORDER_TYPES[0]}
            className={FIELD_INPUT}
          >
            {ORDER_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="order-qty" className={FIELD_LABEL}>
            Quantity
          </label>
          <input
            id="order-qty"
            name="contact[Quantity]"
            type="text"
            inputMode="numeric"
            placeholder="e.g. 40"
            className={FIELD_INPUT}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="order-body" className={FIELD_LABEL}>
            Tell us about it <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="order-body"
            name="contact[body]"
            required
            rows={5}
            placeholder="Letters, colors, placement, deadline. A napkin sketch described in words counts."
            className={`${FIELD_INPUT} resize-y`}
          />
        </div>
      </div>

      <button type="submit" className="btn-varsity mt-8 w-full">
        Send order request
      </button>

      <p className="text-muted mt-4 text-xs leading-relaxed">
        Sends through our secure Shopify store, so you may be asked to confirm
        you’re not a robot. Most quotes go out within a couple of days.
      </p>
    </form>
  );
}
