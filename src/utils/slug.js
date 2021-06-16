import slugify from "slugify";

export function slug(val) {
  return slugify(val, { lower: true });
}
