defmodule Navegador.Repo do
  use Ecto.Repo,
    otp_app: :navegador,
    adapter: Ecto.Adapters.Postgres
end
