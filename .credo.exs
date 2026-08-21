%{
  configs: [
    %{
      name: "default",
      checks: %{
        extra: [
          {Credo.Check.Readability.Specs,
           include_defp: false,
           priority: :high}
        ]
      }
    }
  ]
}
