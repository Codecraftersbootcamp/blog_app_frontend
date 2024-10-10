export default function Post() {
  return (
    <div>
      <div className="post-header">
        <button className="back-button">Back</button>
        <h1 className="post-title">Dummy Title</h1>
      </div>
      <p className="post-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sed nemo
        expedita a repellat! Voluptates voluptatem quaerat unde dicta at quos,
        dignissimos laboriosam tempore labore sit asperiores repudiandae nulla.
        Voluptas.
      </p>

      <div className="post-owner-info">
        <p className="owner-name">Antony Ochieng</p>
        <p className="owner-title">antony@gmail.com</p>
      </div>
    </div>
  );
}
