const useRecentBookings = () => {

  const [searchParams] = useSearchParam()
  const numDays = !searchParams ? 7 : Number(searchParams.get("last"))

}