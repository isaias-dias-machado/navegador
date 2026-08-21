defmodule NavegadorWeb.Static do
  @moduledoc false

  @behaviour Plug

  @impl true
  def init(options), do: Plug.Static.init(options)

  @impl true
  def call(%Plug.Conn{path_info: []} = conn, options) do
    conn
    |> Map.put(:path_info, ["index.html"])
    |> Plug.Static.call(options)
  end

  def call(conn, options), do: Plug.Static.call(conn, options)
end
