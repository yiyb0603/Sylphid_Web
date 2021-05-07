const isEmpty = (value: string | any[]): boolean => {
  if (!value || value.length <= 0 || String(value).trim().length <= 0) {
    return true;;
  }

  return false;
}

export default isEmpty;