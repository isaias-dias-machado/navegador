defmodule Navegador.Repo do
  use Ecto.Repo,
    otp_app: :navegador,
    adapter: Ecto.Adapters.SQLite3
end
