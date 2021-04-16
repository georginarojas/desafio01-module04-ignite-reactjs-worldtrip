import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  let isActive = true; // false

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        filter: isActive ? "opacity(100%)" : "opacity(50%)",
      })}
    </Link>
  );
}
